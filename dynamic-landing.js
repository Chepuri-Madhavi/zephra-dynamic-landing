/*
===========================================================
ZEPHRA DYNAMIC LANDING PAGE
URL-Based Personalization Layer
===========================================================

Purpose:
Personalize selected landing-page content based on
visitor context received through URL parameters.

Supported parameters:
- source
- campaign
- keyword
- ad
- debug

Examples:
?source=google&keyword=rfid-inventory-tracking
?source=google&keyword=rfid-tool-tracking
?source=google&keyword=rfid-reader
?source=meta&ad=stop-losing-tools
?debug=true

Important:
- We never display raw URL input.
- URL values are only used to identify a known category.
- If no known category is detected, the original page
  remains unchanged.
===========================================================
*/


/* =========================================================
   1. APPROVED PERSONALIZATION CONTENT
   ========================================================= */

const personalizationConfig = {

    inventory: {

        headline:
            "Automate Inventory Tracking With RFID",

        description:
            "Improve inventory accuracy, streamline stock management, and gain better warehouse visibility.",

        cta:
            "Discuss Inventory Tracking",

        benefit:
            "Improve Inventory Accuracy",

        usecase:
            "Smarter Inventory and Warehouse Visibility"
    },


    tools: {

        headline:
            "Track Every Tool With RFID",

        description:
            "Reduce lost equipment, improve tool visibility, and strengthen accountability across your operations.",

        cta:
            "Discuss Tool Tracking",

        benefit:
            "Reduce Lost Equipment",

        usecase:
            "Tool and Equipment Tracking"
    },


    hardware: {

        headline:
            "RFID Readers for Reliable Tracking",

        description:
            "Choose the right RFID readers and hardware for reliable deployment and tracking performance.",

        cta:
            "Discuss RFID Hardware",

        benefit:
            "Choose the Right RFID Hardware",

        usecase:
            "RFID Reader Deployment"
    }

};


/* =========================================================
   2. READ URL PARAMETERS
   ========================================================= */

function getUrlContext() {

    const params = new URLSearchParams(window.location.search);

    return {

        source:
            (params.get("source") || "").trim(),

        campaign:
            (params.get("campaign") || "").trim(),

        keyword:
            (params.get("keyword") || "").trim(),

        ad:
            (params.get("ad") || "").trim(),

        debug:
            (params.get("debug") || "").toLowerCase() === "true"
    };
}


/* =========================================================
   3. DETERMINE PERSONALIZATION VARIANT
   ========================================================= */

function detectVariant(context) {

    /*
    Combine keyword, ad and campaign.

    We use these values only for matching known words.
    We never put the visitor's URL text directly into
    the webpage.
    */

    const keyword = context.keyword.toLowerCase();
    const ad = context.ad.toLowerCase();
    const campaign = context.campaign.toLowerCase();


    /*
    Keyword has the strongest priority.
    */

    if (
        keyword.includes("tool") ||
        keyword.includes("equipment")
    ) {

        return "tools";
    }


    if (
        keyword.includes("inventory") ||
        keyword.includes("stock") ||
        keyword.includes("warehouse")
    ) {

        return "inventory";
    }


    if (
        keyword.includes("reader") ||
        keyword.includes("hardware")
    ) {

        return "hardware";
    }


    /*
    If keyword does not identify a category,
    check advertisement context.
    */

    if (
        ad.includes("tool") ||
        ad.includes("equipment") ||
        ad.includes("lost")
    ) {

        return "tools";
    }


    if (
        ad.includes("inventory") ||
        ad.includes("stock") ||
        ad.includes("warehouse")
    ) {

        return "inventory";
    }


    if (
        ad.includes("reader") ||
        ad.includes("hardware")
    ) {

        return "hardware";
    }


    /*
    Finally check campaign context.
    */

    if (
        campaign.includes("tool") ||
        campaign.includes("equipment")
    ) {

        return "tools";
    }


    if (
        campaign.includes("inventory") ||
        campaign.includes("stock") ||
        campaign.includes("warehouse")
    ) {

        return "inventory";
    }


    if (
        campaign.includes("reader") ||
        campaign.includes("hardware")
    ) {

        return "hardware";
    }


    /*
    No known category.
    Keep the original page unchanged.
    */

    return null;
}


/* =========================================================
   4. APPLY PERSONALIZATION
   ========================================================= */

function applyPersonalization(variant, debugMode) {

    /*
    If no valid variant was detected,
    do absolutely nothing.

    This preserves the original page.
    */

    if (!variant || !personalizationConfig[variant]) {

        if (debugMode) {

            console.log("Detected Variant:", "Default");
            console.log("Headline Changed:", "No");
            console.log("CTA Changed:", "No");
        }

        return;
    }


    const content = personalizationConfig[variant];


    /*
    Find ONLY the approved dynamic elements.
    */

    const headline =
        document.querySelector('[data-dynamic="headline"]');

    const description =
        document.querySelector('[data-dynamic="description"]');

    const cta =
        document.querySelector('[data-dynamic="cta"]');

    const benefit =
        document.querySelector('[data-dynamic="benefit"]');

    const usecase =
        document.querySelector('[data-dynamic="usecase"]');


    /*
    Replace selected content only.
    */

    if (headline) {

        headline.textContent =
            content.headline;
    }


    if (description) {

        description.textContent =
            content.description;
    }


    if (cta) {

        cta.textContent =
            content.cta;
    }


    if (benefit) {

        benefit.textContent =
            content.benefit;
    }


    if (usecase) {

        usecase.textContent =
            content.usecase;
    }


    /*
    Debug information.
    */

    if (debugMode) {

        console.log(
            "Detected Variant:",
            variant
        );

        console.log(
            "Headline Changed:",
            headline ? "Yes" : "No"
        );

        console.log(
            "CTA Changed:",
            cta ? "Yes" : "No"
        );
    }
}


/* =========================================================
   5. DEBUG INFORMATION
   ========================================================= */

function showDebugInfo(context, variant) {

    if (!context.debug) {

        return;
    }


    console.group(
        "ZEPHRA Dynamic Landing Page Debug"
    );


    console.log(
        "Source:",
        context.source || "(none)"
    );


    console.log(
        "Campaign:",
        context.campaign || "(none)"
    );


    console.log(
        "Keyword:",
        context.keyword || "(none)"
    );


    console.log(
        "Ad:",
        context.ad || "(none)"
    );


    console.log(
        "Detected Variant:",
        variant || "Default"
    );


    console.groupEnd();
}


/* =========================================================
   6. INITIALIZE PERSONALIZATION
   ========================================================= */

function initializePersonalization() {

    const context =
        getUrlContext();


    const variant =
        detectVariant(context);


    /*
    Apply only approved content.
    */

    applyPersonalization(
        variant,
        context.debug
    );


    /*
    Show debugging information when requested.
    */

    showDebugInfo(
        context,
        variant
    );
}


/* =========================================================
   7. RUN AFTER PAGE LOAD
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    initializePersonalization
);

/* =========================================
   ZEPHRA DYNAMIC LANDING PAGE
   TrackRFID Personalization
   ========================================= */


/* =========================================
   ELEMENTS
   ========================================= */

const welcomeMessage =
    document.getElementById("welcome-message");

const headline =
    document.querySelector('[data-dynamic="headline"]');

const description =
    document.querySelector('[data-dynamic="description"]');

const cta =
    document.querySelector('[data-dynamic="cta"]');

const recommendationHeading =
    document.querySelector('[data-dynamic="recommendation-heading"]');

const recommendationText =
    document.querySelector('[data-dynamic="recommendation-text"]');

const benefitsHeading =
    document.querySelector('[data-dynamic="benefits-heading"]');

const benefitsDescription =
    document.querySelector('[data-dynamic="benefits-description"]');

const benefit1Title =
    document.querySelector('[data-dynamic="benefit1-title"]');

const benefit1Description =
    document.querySelector('[data-dynamic="benefit1-description"]');

const benefit2Title =
    document.querySelector('[data-dynamic="benefit2-title"]');

const benefit2Description =
    document.querySelector('[data-dynamic="benefit2-description"]');

const benefit3Title =
    document.querySelector('[data-dynamic="benefit3-title"]');

const benefit3Description =
    document.querySelector('[data-dynamic="benefit3-description"]');

const usecase =
    document.querySelector('[data-dynamic="usecase"]');

const usecaseDescription =
    document.querySelector('[data-dynamic="usecase-description"]');

const solution1 =
    document.querySelector('[data-dynamic="solution1"]');

const solution2 =
    document.querySelector('[data-dynamic="solution2"]');

const solution3 =
    document.querySelector('[data-dynamic="solution3"]');

const contactDescription =
    document.querySelector('[data-dynamic="contact-description"]');


/* =========================================
   FORM ELEMENTS
   ========================================= */

const form =
    document.getElementById("contact-form");

const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const trackingType =
    document.getElementById("tracking-type");

const messageInput =
    document.getElementById("message");

const formMessage =
    document.getElementById("form-message");


/* =========================================
   DASHBOARD VISUAL ELEMENTS
   ========================================= */

const heroVisual =
    document.getElementById("hero-visual");

const visualTitle =
    document.getElementById("visual-title");

const visualStatus =
    document.getElementById("visual-status");

const visualSubstatus =
    document.getElementById("visual-substatus");


const itemIcon1 =
    document.getElementById("item-icon-1");

const itemName1 =
    document.getElementById("item-name-1");

const itemDetail1 =
    document.getElementById("item-detail-1");


const itemIcon2 =
    document.getElementById("item-icon-2");

const itemName2 =
    document.getElementById("item-name-2");

const itemDetail2 =
    document.getElementById("item-detail-2");


const itemIcon3 =
    document.getElementById("item-icon-3");

const itemName3 =
    document.getElementById("item-name-3");

const itemDetail3 =
    document.getElementById("item-detail-3");


/* =========================================
   PERSONALIZATION DATA
   ========================================= */

const personalizationData = {

    inventory: {

        headline:
            "RFID Solutions for Smarter Inventory Management",

        description:
            "Track inventory in real time, improve stock visibility and reduce manual counting with reliable RFID technology.",

        cta:
            "Track Your Inventory",

        recommendationHeading:
            "Inventory tracking built for accuracy",

        recommendationText:
            "Get better visibility into stock movement, item availability and inventory updates.",

        benefitsHeading:
            "Know what you have and where it is.",

        benefitsDescription:
            "RFID helps inventory teams improve accuracy, reduce manual work and maintain better control over stock.",

        benefit1Title:
            "Real-Time Inventory Visibility",

        benefit1Description:
            "Monitor tagged inventory and quickly understand what is available and where it is located.",

        benefit2Title:
            "Reduce Manual Counting",

        benefit2Description:
            "Automate inventory identification and reduce repetitive manual scanning and counting.",

        benefit3Title:
            "Improve Stock Accuracy",

        benefit3Description:
            "Use reliable tracking information to reduce inventory errors and improve daily decisions.",

        usecase:
            "Smarter Inventory. Better Visibility.",

        usecaseDescription:
            "Track stock movement, item locations and inventory levels using RFID technology.",

        solution1:
            "Inventory Management",

        solution2:
            "Stock Movement Tracking",

        solution3:
            "RFID Inventory Scanning",

        contactDescription:
            "Tell us about your inventory needs and we'll help you explore the right RFID tracking approach."

    },


    tools: {

        headline:
            "RFID Solutions for Tools & Equipment Tracking",

        description:
            "Keep track of tools and equipment, improve asset visibility and reduce time spent searching for items.",

        cta:
            "Track Your Equipment",

        recommendationHeading:
            "Equipment tracking made easier",

        recommendationText:
            "Improve visibility into tools, equipment locations and asset movement across your organization.",

        benefitsHeading:
            "Keep every tool and asset within reach.",

        benefitsDescription:
            "RFID technology helps teams know where equipment is, who is using it and when it was last tracked.",

        benefit1Title:
            "Know Where Equipment Is",

        benefit1Description:
            "Get clearer visibility into the current location of tagged tools and equipment.",

        benefit2Title:
            "Reduce Search Time",

        benefit2Description:
            "Quickly identify and locate equipment instead of relying on manual tracking processes.",

        benefit3Title:
            "Improve Asset Control",

        benefit3Description:
            "Maintain better records of equipment movement, availability and usage.",

        usecase:
            "Every Tool. Every Asset. Visible.",

        usecaseDescription:
            "Track tools and equipment across work areas, storage locations and operational environments.",

        solution1:
            "Tool Tracking",

        solution2:
            "Equipment Asset Management",

        solution3:
            "Asset Location Tracking",

        contactDescription:
            "Tell us what tools or equipment you need to track and we'll help you explore the right RFID approach."

    },


    warehouse: {

        headline:
            "RFID Solutions for Smarter Warehouse Operations",

        description:
            "Improve warehouse visibility, track item movement and create a more efficient flow of goods with RFID.",

        cta:
            "Improve Your Warehouse",

        recommendationHeading:
            "Warehouse visibility from entry to exit",

        recommendationText:
            "Track items across warehouse zones and improve visibility into movement and operations.",

        benefitsHeading:
            "Make every warehouse movement visible.",

        benefitsDescription:
            "RFID helps warehouse teams monitor items, improve operational visibility and reduce manual processes.",

        benefit1Title:
            "Track Warehouse Movement",

        benefit1Description:
            "Monitor tagged items as they move through different warehouse areas and operational zones.",

        benefit2Title:
            "Reduce Manual Processes",

        benefit2Description:
            "Automate identification and reduce repetitive scanning and recording tasks.",

        benefit3Title:
            "Improve Warehouse Decisions",

        benefit3Description:
            "Use better tracking information to improve inventory flow and daily warehouse operations.",

        usecase:
            "One Warehouse. Complete Visibility.",

        usecaseDescription:
            "Track items across receiving, storage, movement and dispatch using RFID technology.",

        solution1:
            "Warehouse Tracking",

        solution2:
            "Item Movement Monitoring",

        solution3:
            "Zone-Based RFID Tracking",

        contactDescription:
            "Tell us about your warehouse workflow and we'll help you explore the right RFID tracking approach."

    }

};


/* =========================================
   DASHBOARD VISUAL DATA
   ========================================= */

const visualData = {

    inventory: {

        title:
            "Inventory",

        status:
            "Tracking Active",

        substatus:
            "Real-time stock visibility",

        items: [

            {
                icon: "📦",
                name: "Stock Items",
                detail: "248 items tracked"
            },

            {
                icon: "🏷️",
                name: "RFID Tags",
                detail: "96% visibility"
            },

            {
                icon: "📊",
                name: "Stock Updates",
                detail: "Updated just now"
            }

        ]

    },


    tools: {

        title:
            "Tools & Equipment",

        status:
            "Equipment Tracking Active",

        substatus:
            "Asset location visibility",

        items: [

            {
                icon: "🛠️",
                name: "Equipment Assets",
                detail: "124 assets tracked"
            },

            {
                icon: "🏷️",
                name: "Asset Tags",
                detail: "98% visibility"
            },

            {
                icon: "📍",
                name: "Locations",
                detail: "Updated just now"
            }

        ]

    },


    warehouse: {

        title:
            "Warehouse",

        status:
            "Warehouse Tracking Active",

        substatus:
            "Movement visibility enabled",

        items: [

            {
                icon: "🏭",
                name: "Warehouse Zones",
                detail: "12 zones monitored"
            },

            {
                icon: "📦",
                name: "Tracked Items",
                detail: "1,248 items tracked"
            },

            {
                icon: "📍",
                name: "Live Movement",
                detail: "Updated just now"
            }

        ]

    }

};


/* =========================================
   UPDATE DASHBOARD VISUAL
   ========================================= */

function updateVisual(type) {

    const visual = visualData[type];

    if (!visual) {
        return;
    }


    if (visualTitle) {
        visualTitle.textContent =
            visual.title;
    }


    if (visualStatus) {
        visualStatus.textContent =
            visual.status;
    }


    if (visualSubstatus) {
        visualSubstatus.textContent =
            visual.substatus;
    }


    if (itemIcon1) {
        itemIcon1.textContent =
            visual.items[0].icon;
    }

    if (itemName1) {
        itemName1.textContent =
            visual.items[0].name;
    }

    if (itemDetail1) {
        itemDetail1.textContent =
            visual.items[0].detail;
    }


    if (itemIcon2) {
        itemIcon2.textContent =
            visual.items[1].icon;
    }

    if (itemName2) {
        itemName2.textContent =
            visual.items[1].name;
    }

    if (itemDetail2) {
        itemDetail2.textContent =
            visual.items[1].detail;
    }


    if (itemIcon3) {
        itemIcon3.textContent =
            visual.items[2].icon;
    }

    if (itemName3) {
        itemName3.textContent =
            visual.items[2].name;
    }

    if (itemDetail3) {
        itemDetail3.textContent =
            visual.items[2].detail;
    }


    /*
       Add category class to the dashboard.
       This allows CSS to give each category
       a slightly different visual treatment.
    */

    if (heroVisual) {

        heroVisual.classList.remove(
            "inventory",
            "tools",
            "warehouse"
        );

        heroVisual.classList.add(type);

    }

}


/* =========================================
   APPLY PERSONALIZATION
   ========================================= */

function applyPersonalization(type) {

    const data =
        personalizationData[type];

    if (!data) {
        return;
    }


    /* HERO */

    headline.textContent =
        data.headline;

    description.textContent =
        data.description;

    cta.textContent =
        data.cta;


    /* RECOMMENDATION */

    recommendationHeading.textContent =
        data.recommendationHeading;

    recommendationText.textContent =
        data.recommendationText;


    /* BENEFITS */

    benefitsHeading.textContent =
        data.benefitsHeading;

    benefitsDescription.textContent =
        data.benefitsDescription;


    benefit1Title.textContent =
        data.benefit1Title;

    benefit1Description.textContent =
        data.benefit1Description;


    benefit2Title.textContent =
        data.benefit2Title;

    benefit2Description.textContent =
        data.benefit2Description;


    benefit3Title.textContent =
        data.benefit3Title;

    benefit3Description.textContent =
        data.benefit3Description;


    /* SOLUTIONS */

    usecase.textContent =
        data.usecase;

    usecaseDescription.textContent =
        data.usecaseDescription;


    solution1.textContent =
        data.solution1;

    solution2.textContent =
        data.solution2;

    solution3.textContent =
        data.solution3;


    /* CONTACT */

    contactDescription.textContent =
        data.contactDescription;


    /* KEEP DROPDOWN IN SYNC */

    if (trackingType) {
        trackingType.value = type;
    }


    /* UPDATE DASHBOARD */

    updateVisual(type);

}


/* =========================================
   PERSONALIZATION BUTTONS
   ========================================= */

function personalize(type) {

    if (!personalizationData[type]) {
        return;
    }


    applyPersonalization(type);


    localStorage.setItem(
        "visitorInterest",
        type
    );

}


/* =========================================
   DROPDOWN PERSONALIZATION
   ========================================= */

if (trackingType) {

    trackingType.addEventListener(
        "change",
        function () {

            const selectedType =
                trackingType.value;


            if (
                personalizationData[selectedType]
            ) {

                applyPersonalization(
                    selectedType
                );


                localStorage.setItem(
                    "visitorInterest",
                    selectedType
                );

            }

        }
    );

}


/* =========================================
   RETURNING VISITOR
   ========================================= */

const hasVisited =
    localStorage.getItem("hasVisited");


if (hasVisited) {

    welcomeMessage.textContent =
        "WELCOME BACK";

} else {

    welcomeMessage.textContent =
        "WELCOME";

    localStorage.setItem(
        "hasVisited",
        "true"
    );

}


/* =========================================
   LOAD SAVED INTEREST
   ========================================= */

const savedInterest =
    localStorage.getItem("visitorInterest");


if (
    savedInterest &&
    personalizationData[savedInterest]
) {

    applyPersonalization(
        savedInterest
    );

} else {

    /*
       Default page when no interest
       has been selected yet.
    */

    const hour =
        new Date().getHours();


    if (hour < 12) {

        headline.textContent =
            "Good Morning. Smarter RFID Tracking Starts Here.";

        description.textContent =
            "Improve visibility, accuracy and efficiency with reliable RFID tracking solutions.";

        cta.textContent =
            "Get Started";

    } else if (hour < 18) {

        headline.textContent =
            "Smarter RFID Tracking for Your Business";

        description.textContent =
            "Improve visibility, accuracy and efficiency with reliable RFID tracking solutions.";

        cta.textContent =
            "Get Started";

    } else {

        headline.textContent =
            "Build a Smarter Tracking Workflow";

        description.textContent =
            "Improve visibility, accuracy and efficiency with reliable RFID tracking solutions.";

        cta.textContent =
            "Get Started";

    }


    /*
       Default dashboard visual
    */

    updateVisual("inventory");

}


/* =========================================
   CONTACT FORM SUBMISSION
   ========================================= */

if (form) {

    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /* CLEAR OLD MESSAGE */

            formMessage.textContent = "";

            formMessage.className =
                "form-message";


            /* GET VALUES */

            const name =
                nameInput.value.trim();

            const email =
                emailInput.value.trim();

            const selectedType =
                trackingType.value;

            const message =
                messageInput.value.trim();


            /* REQUIRED VALIDATION */

            if (
                !name ||
                !email ||
                !selectedType ||
                !message
            ) {

                formMessage.textContent =
                    "Please fill in all required fields.";

                formMessage.classList.add(
                    "error"
                );

                return;

            }


            /* EMAIL VALIDATION */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                !emailPattern.test(email)
            ) {

                formMessage.textContent =
                    "Please enter a valid email address.";

                formMessage.classList.add(
                    "error"
                );

                return;

            }


            /* INTEREST NAME */

            const interestNames = {

                inventory:
                    "inventory",

                tools:
                    "tools and equipment",

                warehouse:
                    "warehouse"

            };


            const interestName =
                interestNames[selectedType];


            /* SUCCESS MESSAGE */

            formMessage.textContent =
                "Thanks " +
                name +
                "! Your " +
                interestName +
                " tracking request has been received.";


            formMessage.classList.add(
                "success"
            );


            /* SAVE LEAD INFORMATION */

            localStorage.setItem(
                "leadName",
                name
            );

            localStorage.setItem(
                "leadEmail",
                email
            );

            localStorage.setItem(
                "leadInterest",
                selectedType
            );

            localStorage.setItem(
                "visitorInterest",
                selectedType
            );


            /* APPLY SELECTED PERSONALIZATION */

            applyPersonalization(
                selectedType
            );


            /* CLEAR MESSAGE FIELD */

            messageInput.value = "";

        }
    );

}
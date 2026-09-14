# Zephra Dynamic Landing Page Personalization

A lightweight JavaScript personalization layer for an existing RFID landing page.

The page reads visitor context from URL parameters such as `source`, `campaign`, `keyword`, and `ad`, identifies a known visitor intent, and updates only selected DOM elements.

The original landing page remains the default when no supported context is detected.

---

## Project Objective

The goal of this Proof of Concept (POC) is to demonstrate dynamic landing-page personalization without rebuilding the existing page or creating separate landing pages.

The implementation:

1. Loads the existing landing page normally.
2. Reads context from the URL.
3. Matches the context against predefined rules.
4. Detects a known personalization category.
5. Updates only selected DOM elements.
6. Leaves the rest of the page unchanged.

No backend or AI model is required.

---

## Personalization Variations

The project currently supports three variations.

### 1. Inventory

Example:

```text
?source=google&keyword=rfid-inventory-tracking
```

Personalized content focuses on:

* Inventory tracking
* Inventory accuracy
* Stock management
* Warehouse visibility

---

### 2. Tool Tracking

Example:

```text
?source=google&keyword=rfid-tool-tracking
```

Personalized content focuses on:

* Lost tools
* Equipment visibility
* Tool tracking
* Accountability

---

### 3. RFID Hardware

Example:

```text
?source=google&keyword=rfid-reader
```

Personalized content focuses on:

* RFID readers
* RFID hardware
* Hardware selection
* Deployment

---

## Default Variation

When no recognized context is provided, the original page remains unchanged.

Example:

```text
/product
```

or, when running locally:

```text
index.html
```

Unknown keywords also leave the original page unchanged.

Example:

```text
?source=google&keyword=hello-world
```

---

# Supported URL Parameters

The JavaScript reads the following parameters:

| Parameter  | Purpose                           |
| ---------- | --------------------------------- |
| `source`   | Identifies the traffic/ad source  |
| `campaign` | Provides campaign context         |
| `keyword`  | Primary visitor intent signal     |
| `ad`       | Advertisement/context signal      |
| `debug`    | Enables browser-console debugging |

Example:

```text
?source=google&keyword=rfid-inventory-tracking
```

---

# Keyword Matching

The project uses simple deterministic rules.

No AI or machine-learning model is used for classification.

### Tools

If the keyword, advertisement, or campaign contains terms such as:

```text
tool
equipment
lost
```

the Tools variation is selected.

### Inventory

If the context contains:

```text
inventory
stock
warehouse
```

the Inventory variation is selected.

### RFID Hardware

If the context contains:

```text
reader
hardware
```

the RFID Hardware variation is selected.

If no supported term is found, the page stays in its original state.

Matching is case-insensitive.

---

# DOM Elements Modified

Only selected elements are personalized.

The JavaScript targets these elements:

```text
data-dynamic="headline"
data-dynamic="description"
data-dynamic="cta"
data-dynamic="benefit"
data-dynamic="usecase"
```

These correspond to:

1. Hero headline
2. Hero description
3. Hero CTA
4. Main benefit heading
5. Use-case heading

Other sections and dashboard content are intentionally left unchanged.

This keeps the personalization layer small and reduces the risk of breaking the existing landing page.

---

# Architecture

The implementation follows this flow:

```text
Visitor opens landing page
          ↓
JavaScript loads
          ↓
URLSearchParams reads URL context
          ↓
keyword / ad / campaign are checked
          ↓
Known category is detected
          ↓
Pre-approved content is selected
          ↓
Selected DOM elements are updated
          ↓
Page remains otherwise unchanged
```

---

# Security / Content Safety

URL parameters are never directly displayed on the page.

For example, if a visitor uses:

```text
?keyword=some-random-text
```

the value is only checked against predefined matching rules.

The application does not inject arbitrary URL input into the HTML.

Only predefined content from the personalization configuration can be displayed.

---

# How to Add a New Variation

New variations can be added in two steps.

### Step 1 — Add content to the configuration

Inside `dynamic-landing.js`, add a new object:

```javascript
newCategory: {
    headline: "Example Headline",
    description: "Example description.",
    cta: "Example CTA",
    benefit: "Example Benefit",
    usecase: "Example Use Case"
}
```

### Step 2 — Add matching rules

Add a rule inside `detectVariant()` that returns:

```javascript
"newCategory"
```

when the relevant keyword, advertisement, or campaign is detected.

This keeps content and detection logic easy to maintain.

---

# Local Setup

No backend is required.

### Option 1 — Open directly

Open:

```text
index.html
```

in a browser.

### Option 2 — Use VS Code Live Server

Open the project folder in VS Code and launch the page using Live Server.

The exact local URL may differ depending on the development server.

---

# Testing URLs

### Default

```text
index.html
```

Expected:

Original page content.

---

### Inventory

```text
index.html?source=google&keyword=rfid-inventory-tracking
```

Expected variant:

```text
Inventory
```

---

### Tool Tracking

```text
index.html?source=google&keyword=rfid-tool-tracking
```

Expected variant:

```text
Tools
```

---

### RFID Hardware

```text
index.html?source=google&keyword=rfid-reader
```

Expected variant:

```text
Hardware
```

---

### Advertisement Context

```text
index.html?source=meta&ad=stop-losing-tools
```

Expected variant:

```text
Tools
```

---

### Unknown Keyword

```text
index.html?source=google&keyword=hello-world
```

Expected:

Original page remains unchanged.

---

### Debug Mode

```text
index.html?source=google&keyword=rfid-tool-tracking&debug=true
```

Open the browser Developer Tools and check the Console.

Debug information includes:

```text
Source
Campaign
Keyword
Ad
Detected Variant
Headline Changed
CTA Changed
```

---

# Engineering Decisions

### 1. URLSearchParams

`URLSearchParams` provides a simple browser-native way to read URL parameters.

### 2. Configuration-Based Content

Personalized content is stored in one configuration object rather than being scattered throughout the code.

This makes future variations easier to maintain.

### 3. Deterministic Matching

Simple keyword matching was chosen because the assignment requires a POC and does not require AI-based intent classification.

It is predictable and easy to test.

### 4. Safe DOM Updates

`textContent` is used to update text.

The implementation does not directly inject arbitrary URL values into the page.

### 5. Minimal DOM Changes

Only five selected elements are personalized.

This follows the requirement to preserve the existing landing-page structure.

### 6. Graceful Fallback

If the URL does not contain a recognized context, no personalization is applied.

The original HTML therefore acts as the default experience.

---

# Failure Handling

The page handles unsupported or invalid context gracefully.

Examples:

* Missing parameters → original page
* Unknown keyword → original page
* Unknown advertisement → original page
* Unsupported campaign → original page
* Missing individual parameter → remaining available context can still be checked

The page does not depend on personalization to function.

---

# Limitations

This is a Proof of Concept.

Current limitations include:

* Keyword matching is rule-based.
* No backend analytics are implemented.
* No persistent visitor profile is stored.
* Personalization is limited to predefined categories.
* No AI-based intent detection is used.
* The current project does not connect to a production CRM or advertising platform.

These choices keep the implementation simple and aligned with the POC requirements.

---

# Project Files

```text
zephra-dynamic-landing/
│
├── index.html
├── style.css
├── dynamic-landing.js
└── README.md
```

### File responsibilities

**index.html**

Contains the existing landing-page structure and marks the selected elements with `data-dynamic` attributes.

**style.css**

Contains the landing-page styling and responsive layout.

**dynamic-landing.js**

Contains URL parsing, context detection, personalization configuration, DOM updates, and debug logging.

**README.md**

Documents the architecture, parameters, variations, testing, setup, and limitations.

---

# GitHub Repository

Repository:

```text
https://github.com/Chepuri-Madhavi/zephra-dynamic-landing
```

---

# Assignment Summary

The implementation demonstrates:

* URL-based landing-page personalization
* Inventory personalization
* Tool tracking personalization
* RFID hardware personalization
* Default/original experience
* Advertisement-based context detection
* Case-insensitive matching
* Safe predefined content mapping
* Minimal DOM manipulation
* Debug mode
* Graceful fallback for unknown context
* Responsive existing landing-page structure

```

### Save it

1. Open `README.md`.
2. Press **Ctrl + A**.
3. Delete the old README.
4. Paste the complete README above.
5. Press **Ctrl + S**.

After saving, **don't push to GitHub yet**.

Next we'll do a **final code/assignment check**, because I want to catch anything that could cost you points before we make the final GitHub commit.
'''
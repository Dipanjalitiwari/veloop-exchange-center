# VELOOP Exchange Center

A premium and responsive reward conversion experience built with React and Vite.

## Project Overview

VELOOP Exchange Center allows users to convert their earned Gems into VEs through a simple and transparent reward conversion flow.

The interface is designed to feel like a reward redemption experience rather than a cryptocurrency trading platform.

## Exchange Center Concept

The user can:

- View available Gems
- View available VEs
- Explore available conversion options
- Review a conversion before confirming
- Convert eligible Gems into VEs
- View conversion history
- See insufficient balance information
- Receive a success confirmation after conversion

## Features

- Premium dark fintech-inspired UI
- Responsive design for mobile, tablet and desktop
- Available Gems and VEs balance display
- Multiple reward conversion options
- Confirmation modal before conversion
- Balance preview before confirmation
- Insufficient Gems state
- Loading state during conversion
- Double-click conversion protection
- Successful conversion state
- Conversion history
- Exchange rules section
- How Exchange Works section
- Information tooltips
- Hover interactions and animations
- Responsive modal design

## Exchange Logic

The conversion follows the existing reward conversion values:

| Required Gems | VEs Received |
|---------------|--------------|
| 28 Gems       | 151 VEs      |
| 39 Gems       | 168 VEs      |
| 57 Gems       | 255 VEs      |
| 100 Gems      | 455 VEs      |

The user must have enough Gems to complete a conversion.

After a successful conversion:

- Required Gems are deducted from the balance.
- Received VEs are added to the balance.
- The conversion is added to Recent Conversions.

## User Flow

1. User views their available Gems and VEs.
2. User selects a conversion option.
3. Confirmation modal opens.
4. User reviews Gems and VEs values.
5. User checks the balance after conversion.
6. User confirms the conversion.
7. Conversion enters a loading state.
8. Balance is updated.
9. Success message is displayed.
10. Conversion appears in Recent Conversions.

## Components

The project is organized into reusable React components.

Main components include:

- ExchangeHero
- BalanceOverview
- ExchangeCard
- ExchangeModal
- ConversionSuccess
- ExchangeHistory
- ExchangeRules
- HowExchangeWorks

## Technology Stack

- React.js
- Vite
- JavaScript
- CSS Modules
- React Hooks
- Responsive CSS
- CSS Animations

## Project Structure

```text
src/
├── components/
│   └── exchange/
│       ├── BalanceOverview.jsx
│       ├── ConversionSuccess.jsx
│       ├── ExchangeCard.jsx
│       ├── ExchangeHero.jsx
│       ├── ExchangeHistory.jsx
│       ├── ExchangeLoader.jsx
│       ├── ExchangeModal.jsx
│       ├── ExchangeRules.jsx
│       └── HowExchangeWorks.jsx
│
├── data/
│   └── exchangeData.jsx
│
├── page/
│   └── ExchangeCenter/
│       └── ExchangeCenter.jsx
│
└── styles/
    └── exchange.module.css
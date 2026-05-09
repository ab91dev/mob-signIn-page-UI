# Dribbble Sign In UI

A minimalist sign-in screen using React Native/Expo.

## Overview

This project provides a sign-in UI component built with React Native and Expo.

## Features

- Clean, minimalist design.

- Cross-platform compatibility (iOS, Android, Web).

## Quick Start

### Clone & Run

```bash
# Clone the repository
git clone https://github.com/yourusername/mob-signIn-page-UI.git
cd mob-signIn-page-UI

# Install expo
npx create-expo-app@latest --template default@sdk-55

# Start the development server
npx expo start
```

## Installation

### Setup

```bash
# Install project dependencies
npm install

# Start development server
npx expo start
```

## Technical Stack

- **React Native** - Cross-platform UI framework
- **Expo** - React Native development platform
- **TypeScript** - Type-safe JavaScript
- **React Native Safe Area Context** - Safe area management
- **Expo Router** - File-based routing

## UI Components

The sign-in screen includes:

- **Logo Section** - Minimalist dot-based branding
- **Heading & Subheading** - Clear call-to-action text
- **Email Input** - Icon + input field with hover state
- **Password Input** - Icon + input field with visibility toggle
- **Sign In Button** - Primary action button (Green: #8CD211)
- **Social Buttons** - Meta, Google, and Instagram login options
- **Footer Links** - Sign Up and Forgot Password links

## Design System

### Colors

```
Primary Green: #8CD211
Background: #F6F6F6
White: #FFFFFF
Dark Text: #222222
Light Gray: #8A8A8A
Border Gray: #E5E5E5
```

### Typography

- **Heading**: 38px, Bold (700)
- **Subheading**: 15px, Regular
- **Label**: 15px, Semi-bold (600)
- **Button Text**: 18px, Bold (700)

## File Descriptions

### `src/app/index.tsx`

Main sign-in component featuring:

- Email and password input fields
- Form validation hooks
- Social login integration
- Keyboard handling
- Responsive styling

### `src/app/_layout.tsx`

Navigation configuration and layout setup with Expo Router

### `app.json`

Expo project configuration including:

- App name and version
- Icon and splash screen settings
- Platform-specific configuration
- Build settings

## Dependencies

```json
{
  "expo": "~55.0.23",
  "react-native": "0.83.6",
  "react": "19.2.0",
  "expo-router": "~55.0.14",
  "react-native-safe-area-context": "~5.6.2"
}
```

### Development Guidelines

- Follow React Native best practices
- Test on multiple devices/platforms
- Update documentation with changes

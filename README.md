This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Soumic Backoffice - Admin interface

This repository contains the admin dashboard for the Soumic Festival project.

> Built with:
>
> - Next.js (App Router)
> - CSS Modules
> - React hooks
> - react-hot-toast for user feedback
> - Express backend (soumic-backend)

---

## Project structure

soumic-backoffice/
├── app/
│ ├── page.js # Login page ("/")
│ └── artists/page.js # Protected artist dashboard
├── components/ # Reusable UI components
├── hooks/ # Custom hooks
├── lib/ # API interaction
├── public/images/artists/
└── CSS modules

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/soumic-backoffice.git
cd soumic-backoffice
```

### 2. Install dependencies

npm install

### 3. Start the dev server

npm run dev

## Deployment

Main page: /

After login: /artists

Make sure CORS on backend allows this domain

Example config in Express:

cors({
origin: ["https://soumic-backoffice.vercel.app"],
credentials: true,
});

## Why a separate backoffice ?

It constitutes a clean separation between public site and admin, it is easier to manage user permissions. It allows a safer deployment and the use of the same backend for both frontend and admin part.

## Project context

This project was built as part of the evaluation project for a fullstack training.
Admin dashboard by: Manon Fromage

---

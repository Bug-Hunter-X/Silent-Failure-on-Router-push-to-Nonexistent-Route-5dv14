# Next.js Silent Router Push Failure

This repository demonstrates a subtle bug in Next.js routing where pushing to a nonexistent route results in a blank page without any error messages.  This can make debugging extremely difficult.

## Bug Description

The `bug.js` file contains a component that uses `next/router` to navigate to a page that doesn't exist.  The unexpected behavior is that instead of an error, a blank page is rendered.

## Solution

The `bugSolution.js` file demonstrates a solution using error boundaries to catch these silent failures and display a user-friendly error message or redirect to a suitable fallback page.

## Reproduction Steps

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Click the button in the browser.  Observe the blank page.
5. Switch to the solution to see a more robust error handling.

## Technologies Used

* Next.js
* React
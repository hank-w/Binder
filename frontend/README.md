# Binder

## Frontend structure

### Code structure

- `/src` general code used for entire app/top level stuff
- `/src/components` reusable components used on many pages
- `/src/pages` A route for every URL we have

### For user:

- `/` is homepage/dashboard if you're logged in
- `/student` For student
  - `/search` searchbar page
    - `/:search` search results page
  - `/browse` generic tutor browsing between diff subjects that you said you indicated you liked at onboarding
- `/tutor` For Teaching
  - `/verify` For viewing verification status/submitting right documents
- `/sessions` All sessions with students or TAs. Has a toggle in top right to switch between modes.
  - `/sessions:sessionid` Session with specific user (like group chat)
- `/profile` User account settings (ugly compared to rest of app, should not be visited often)

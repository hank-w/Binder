# Binder

## Frontend structure

- `/src` general code used for entire app/top level stuff
- `/src/components` reusable components used on many pages
- `/src/pages` A route for every URL we have

### For user:

- `/` is homepage/dashboard if you're logged in
- `/s` For student
  - `/search` searchbar page
    - `/:search` search results page
  - `/browse` generic tutor browsing between diff subjects that you said you indicated you liked at onboarding
  - `/sessions` already scheduled sessions and something about past sessions
- `/t/` For Teaching
  - `/sessions` More compact way of showing all past sessions (ideally each student interacts with barely any TAs, but each TA interacts with a lot of students)
- `/sessions:sessionid` Session with specific user (like group chat)
- `/stats` User profile with stats, and reports about previous tutors. This feels kinda dashboardy.
- `/settings` User account settings (ugly compared to rest of app, should not be visited often)

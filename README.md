### Overview ###
The following POC is a simple cypress test that intergrates PERCY, a visaul regression tool. 

### Visual Testing ###

- Visaul testing is a type of testing that reviews an applications UI.

### Overview of Percy ###

- Percy is a visual review platform
- An automated process of detecting and reviewing visual UI changes
- Simple integration into a application CI/CD pipeline, in this case we will use github
- Makes use of "visual diffs", creates a visaul comparsion showing the user what has changed between the orignal snapshot and the current snapshot
- Supports multiple testing frameworks such as cypress
- At a highlevel it takes a snapshot of the application, uploads to percy platform and peforms visual dif
- Recomended to run on CI but for this demo will run locally

### How Percy works - example with Cypress ###

- Cypress runner wrapped in percy-agent
- Cypress runner sends snap shot to percy-agent
- Percy agent talks to percy API and does things such as sending the DOM snap shot
- Percy takes DOM snap shot and sends to percys own visaul rendering & testing infrastruture.
- This infrastruture builds the snapshot from the dom snapshot that allows the snapshot to be rendered on multiple browsers
- Once done a visual dif will take place and results will be sent to chosen integration platform, in this case github

### Workflow of example ###
 - Create pull request with a visaul change, in are case we will use google (as it changes daily)
 - Indicate how we have intergrated percy into are github repo
 - Will then access our percy dashboard which will flag a visaul def on that PR
 - Will then show all features in percy dashboard
 - Approve change and show percy stage passing
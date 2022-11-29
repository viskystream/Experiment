# Experiment

For this to work, please make sure you are on VPN.

- Checkout the branch and run `npm install && npm run start`
- It will ask you for the namespace (you may type `vineetha` assuming my devspace is up and running)
- Please enter any unique user identifier (example: `john-doe`)
- It will print out the private key
- Download OBS from https://obsproject.com/download
- Once OBS is downloaded and opened, click on "+" under Sources
- Select Image and choose an image to display
- Go to "Settings" in the right panel
- Click on "Stream" in the Controls panel on the left
- Select "Custom" for the Service
- Please paste rtmp://origin.${results.nameSpace}.devspace-node.lsea4.livelyvideo.tv/origin in Server
- Please use the ${resp.results.pvtKey}?clientReferrer=staging in Stream Key
- Click OK
- Click on "Start Streaming" in the Controls panel on the left


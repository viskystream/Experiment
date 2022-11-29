import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import async from 'async';
import got from 'got';

const rl = readline.createInterface({ input, output });

const fn = async () => {
	async.series({
		nameSpace: function(callback) {
			rl.question('*** Please make sure you are on VPN. Thank you ***\nEnter the namespace of your devspace ', (nameSpace) => {
				callback(null, nameSpace);
			});
		},
		userId: function(callback) {
			rl.question('Enter a unique user identifier (can be a userID or hyphenated username or UUID) ', (userId) => {
				callback(null, userId);
			});
		}
	}, async function(err, results) {
		const options = {
			headers: {
				'Authorization': 'Bearer something-i-can-type'
			}
		};
		let resp = await got(`https://${results.nameSpace}.devspace.lsea4.livelyvideo.tv/api/ls/v1/key/${results.userId}`, options).json();
		console.log(resp);
		console.log(`                - Download OBS from https://obsproject.com/download
				- Once OBS is downloaded and opened, click on "+" under Sources
				- Select Image and choose an image to display
				- Go to "Settings" in the right panel
				- Click on "Stream" in the Controls panel on the left
				- Select "Custom" for the Service
				- Please paste rtmp://origin.${results.nameSpace}.devspace-node.lsea4.livelyvideo.tv/origin in Server
				- Please use the ${resp.results.pvtKey}?clientReferrer=staging in Stream Key
				- Click OK
				- Click on "Start Streaming" in the Controls panel on the left`);

		rl.question('Please hit enter once you are done with the OBS setup and started streaming from there', (answer) => {
			console.log('Please wait for 10 seconds....');
			// Safer to wait for a few seconds so that we get accurate data
			setTimeout(async () => {
				resp = await got (`https://${results.nameSpace}.devspace.lsea4.livelyvideo.tv/api/ls/v1/live`, options).json();
				console.log('Live Streams:-');
				console.log(resp);
				rl.close();
			}, 10000);
		});

	});
};
fn();
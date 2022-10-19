
# LeetcodeContestRankFetcher Chrome extension

Chrome extension that allows to add friends to your local storage and fetch their Leetcode contest rank



## Explaination

- Add leetcode username to local storage
- Get the Rank details API from  Developer tools>Network
- Due to CORS policy We will inject the code in leetcode WebPage to fetch their API
- Start with PageNo=1 and keep searching unless we found all saved username

## Run Locally

- Clone the project

```bash
  git clone https://github.com/tarakes/LeetcodeContestRankFetcher
```

- Open Google Chrome and type
```
chrome://extensions/ 
```
- Turn on Developer Mode
- Load unpacked
- select the cloned folder
- Open https://leetcode.com/contest/
- Click on extensions icon on top right(looks like puzzle icon)
- Click on the  extension
- Add some valid username
- type Name of the contest
- Click On ```Start Monitoring```
- If the user exist in the contest their details will be shown
### Note
##### Don't close the extension or Click elsewhere unless you are done otherwise extension will be closed
## Demo



https://youtu.be/WRGy2Ne_Eh4
## Reference

 - [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)



## FAQ

#### How to delete added Usernames?

Just clear the local storage

#### Details is not appearing

Please wait for sometime, searching may take time
and also make sure the username has attempted the contest


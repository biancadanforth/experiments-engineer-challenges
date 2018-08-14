# Manual QA test plan

## Once

1. Install Firefox.

2. `npm install -g web-ext`

After you have cloned the repo and switched to the repo directory on the command line:

## Once per testing session

```
cd webextension
web-ext run
```

## Tests

### 1.  A noisy tab will steal focus from a non-noisy tab

#### setup
- Open tab:  `youtube.com` and start a video playing.
- Leaving the `youtube.com` tab open, open a second, new tab.

#### action
- click Focus Noisy Tab Button

#### expect
- The `youtube` tab steals focus.

### 2.  See questions in SPEC.md for additional behaviors/edge cases questions; once the PM makes the call, enumerate them here.



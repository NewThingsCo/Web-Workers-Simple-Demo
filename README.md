# About

A simple demo to demonstrate how to shift data processing from the main thread and improve the UI from a UX perspective.

# To get started

```
yarn install # or npm install
yarn serve ./
```

Then visit [http://localhost:3000](http://localhost:3000).

Click on either of the "Run Long Task" buttons. One will run it in the main javascript thread. You should see some animations blocked and frozen. Clicking on the other button should not block any of the animations and demonstrate a simple principal about how to shift data processing to a worker is better for the UI.

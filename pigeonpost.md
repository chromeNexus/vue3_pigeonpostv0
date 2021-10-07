# PPOST NOTES

## ADDED NPM [vue-composable, @vueuse/core, pinia(yarn add pinia@next), tailwindcss@latest(npx tailwindcss init -p), headlessui/vue @heroicons/vue, tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9, axios, lodash, vuefire@3.0.0-alpha.2, firebase, faker(dev dependency only), nanoid(in place of uuidv4) ]

## npm install tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9  works

## vuefire require firebase 7

## Firebase App (the core Firebase SDK) is always required and must be listed first

## import firebase from "firebase/app";

## If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import

## import * as firebase from "firebase/app"

## added npm install vue-select

## Files added

[X] Added index.css to root folder
[X] Created Store (src/stores)
    [ ] files added to store [index.js, auth.js,]
[X] Created server folder (src/server)
    [X] Created firebase.js & added to server folder
[X] Added Assets [USPS, FEDEX, UPS]

## todo

[x] New home added
[X] Anonymous login w/ redirect
[X] Email login w/ redirect
[X] Email SignUp w/ redirect
[ ] add logout() to app.vue, reference client.js
[ ] Create GitIgnore & initial commit
[ ] Add Components

## APP Structure

- App.vue
    NavBar.vue
        -routerLinks
        -UserProfile.vue
            -User.vue

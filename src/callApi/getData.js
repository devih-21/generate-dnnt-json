export default async function getData (auth) {
    return fetch(`https://countdown-ngay-thi-android-app.firebaseio.com/.json?auth=${auth}&format=export&print=pretty`)
           .then(res => res.json())
}

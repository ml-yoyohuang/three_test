/* eslint-disable */
window.fbAsyncInit = function () {
  FB.init({
    appId: '856968711046846',
    cookie: true,
    xfbml: true,
    version: 'v2.11',
  });

  FB.AppEvents.logPageView();

  FB.getLoginStatus((response) => {
    console.log(response.status);
    if (response.status != 'connected') {
      console.log('login start.');
      // window.location.href = "https://www.facebook.com/v2.11/dialog/oauth?client_id=" + '856968711046846' + "&redirect_uri=" + encodeURIComponent('https://localhost:3000/guideline.html');
    }
  });
};


(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/zh_TW/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

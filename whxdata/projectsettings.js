// Publish project specific data
(function() {
rh = window.rh;
model = rh.model;

rh.consts('DEFAULT_TOPIC', encodeURI("First_Topic.htm"));
rh.consts('HOME_FILEPATH', encodeURI('index.htm'));
rh.consts('START_FILEPATH', encodeURI('index.htm'));
rh.consts('HELP_ID', 'e5e20094-de78-48fb-a709-9def2ccba221' || 'preview');
rh.consts('LNG_SUBSTR_SEARCH', 0);

model.publish(rh.consts('KEY_LNG_NAME'), "en_US");
model.publish(rh.consts('KEY_DIR'), "ltr");
model.publish(rh.consts('KEY_LNG'), {"Contents":"مطالب","Index":"راهنمای موضوعی","Search":"-جستجو-","Glossary":"واژه نامه","Logo/Author":"ارائه شده توسط","Show":"نمایش دادن","Hide":"مخفی کردن","SyncToc":"SyncToc","Prev":"قبلی","Next":"بعدی","Disabled Prev":"<<","Disabled Next":">>","Seperate":"|","OpenLinkInNewTab":"باز کردن در برگه جدید","SearchOptions":"گزینه های جستجو","Loading":"در حال بارگیری...","UnknownError":"خطای ناشناخته","Logo":"آرم","HomeButton":"صفحه اصلی","SearchPageTitle":"نتایج جستجو","PreviousLabel":"قبلی","NextLabel":"بعدی","TopicsNotFound":"هیچ نتیجه ای پیدا نشد","JS_alert_LoadXmlFailed":"نتوانست فایل XML را بارگیری کند","JS_alert_InitDatabaseFailed":"نتوانست پایگاه داده را برای استفاده آماده کند","JS_alert_InvalidExpression_1":"عبارت جستجویی که تایپ کردید، معتبر نیست.","Searching":"در حال جستجو...","Cancel":"لغو","Canceled":"لغو شد","ResultsFoundText":"%1 نتیجه(های) پیدا شده برای %2","SearchResultsPerScreen":"نتایج جستجو در هر صفحه","Back":"بازگشت","TableOfContents":"فهرست مطالب","IndexFilterKewords":"فیلتر کردن کلمات اصلی","GlossaryFilterTerms":"فیلتر کردن واژه ها","ShowAll":"همه","HideAll":"مخفی کردن همه","ShowHide":"نمایش دادن/مخفی کردن","IeCompatibilityErrorMsg":"این صفحه را نمی توان در 8 Internet Explorer یا نسخه قدیمی تر مشاهده کرد.","NoScriptErrorMsg":"پشتیبانی JavaScript را در مرورگر فعال کنید تا این صفحه را مشاهده کنید.","EnableAndSearch":"نمایش نتایج دارای کلیه کلمات جستجو","HighlightSearchResults":"برجسته کردن نتایج جستجو","Print":"چاپ","Filter":"فیلتر کردن","SearchTitle":"جستجو","ContentFilterChanged":"فیلتر محتوا تغییر کرده است، دوباره جستجو کنید","EndOfResults":"پایان نتایج جستجو.","Reset":"بازنشانی","NavTip":"منو","ToTopTip":"رفتن به بالا","ApplyTip":"اعمال کردن","SidebarToggleTip":"بازکردن/جمع کردن"});

model.publish(rh.consts('KEY_HEADER_DEFAULT_TITLE_COLOR'), "#ffffff");
model.publish(rh.consts('KEY_HEADER_DEFAULT_BACKGROUND_COLOR'), "#025172");
model.publish(rh.consts('KEY_LAYOUT_DEFAULT_FONT_FAMILY'), "\"Trebuchet MS\", Arial, sans-serif");

model.publish(rh.consts('KEY_HEADER_TITLE'), "تایید کارکرد");
model.publish(rh.consts('KEY_HEADER_TITLE_COLOR'), "");
model.publish(rh.consts('KEY_HEADER_BACKGROUND_COLOR'), "");
model.publish(rh.consts('KEY_HEADER_LOGO_PATH'), "");
model.publish(rh.consts('KEY_LAYOUT_FONT_FAMILY'), "");
model.publish(rh.consts('KEY_HEADER_HTML'), "<div class='topic-header'>\
  <div class='logo' onClick='rh._.redirectToLayout()'>\
    <img src='#{logo}' />\
  </div>\
  <div class='nav'>\
    <div class='title' title='#{title}'>\
      <span onClick='rh._.redirectToLayout()'>#{title}</span>\
    </div>\
    <div class='gotohome' title='#{tooltip}' onClick='rh._.redirectToLayout()'>\
      <span>#{label}</span>\
    </div></div>\
  </div>\
<div class='topic-header-shadow'></div>\
");
model.publish(rh.consts('KEY_HEADER_CSS'), ".topic-header { background-color: #{background-color}; color: #{color}; width: calc(100%); height: 3em; position: fixed; left: 0; top: 0; font-family: #{font-family}; display: table; box-sizing: border-box; }\
.topic-header-shadow { height: 3em; width: 100%; }\
.logo { cursor: pointer; padding: 0.2em; height: calc(100% - 0.4em); text-align: center; display: table-cell; vertical-align: middle; }\
.logo img { max-height: 100%; display: block; }\
.nav { width: 100%; display: table-cell; }\
.title { width: 40%; height: 100%; float: left; line-height: 3em; cursor: pointer; }\
.gotohome { width: 60%; float: left; text-align: right; height: 100%; line-height: 3em; cursor: pointer; }\
.title span, .gotohome span { padding: 0em 1em; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; display: block; }");

})();

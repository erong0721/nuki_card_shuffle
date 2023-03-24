# nuki_card_shuffle

ズリネタ用のカードをシャッフルする奥ゆかしいライブラリ。

# use

```html
<head>
  <link href="./css/nuki_card_shuffle.min.css" rel="stylesheet" type="text/css">
  <script src="./js/nuki_card_shuffle.min.js"></script>
</head>
<body>
  <div id="test"></div>
</body>
```

```js
  /* dmm webapi から取得
   * https://affiliate.dmm.com/api/v3/itemlist.html
   * 必ず3つ指定すること
   * 下記コードで取得することも可能
   *   (async () => {
   *     const res = await fetch('https://api.dmm.com/affiliate/v3/ItemList?api_id=[APIID]&affiliate_id=[アフィリエイトID]&site=FANZA&service=digital&floor=videoa&hits=3&output=json');
   *     const data = await res.json();
   *     const options = data.result.items.map((d) => {
   *       return {
   *         title: d.title,
   *         affiliateURL: d.affiliateURL,
   *         imageURL_small: d.imageURL.small,
   *         review_average: d.review.average,
   *         review_count: d.review.count,
   *         sampleMovieURL_size_720_480: d.sampleMovieURL.size_720_480,
   *       }
   *     })
   *     console.log(options)
   *   })()
   */
  const opeions = [
    {
        "title": result.items.[n].title,
        "affiliateURL": result.items.[n].affiliateURL,
        "imageURL_small": result.items.[n].imageURL.small,
        "review_average": result.items.[n].review.average,
        "review_count": result.items.[n].review.count,
        "sampleMovieURL_size_720_480": result.items.[n].sampleMovieURL.size_720_480,
    },
  ]
  // inner html.
  const nukiCardShuffle = new NukiCardShuffle('#test', options)
  // Shuffle open.
  nukiCardShuffle.open()
  // Shuffle close.
  nukiCardShuffle.close()
  // Shuffle toggle.
  nukiCardShuffle.toggle()
```

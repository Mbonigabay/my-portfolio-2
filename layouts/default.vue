<template>
  <div>
    <Html>
      <Head>
        <Title>Welcome To Yusuf's Portofolio</Title>
      </Head>
      <Link rel="stylesheet" href="vendor/fontawesome-free/css/all.css" />
      <Link rel="stylesheet" href="css/main.css" />
      <Body id="bg-img">
        <TheHeader />
        <slot />
        <Script src="js/main.js" defer />
        <Script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js" defer />
      </Body>
    </Html>
  </div>
</template>

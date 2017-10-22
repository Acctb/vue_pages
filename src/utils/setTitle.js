
export default {
  setTitle(title) {
    document.title = title;
    dd.biz.navigation.setTitle({
      title: title,
    });
  }
}

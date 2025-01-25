function useCapitalize(req = " ") {
  if (req == "" || req == null) {
    return req;
  } else {
    let arrayString = req.split(" ");
    let res = "";
    arrayString.forEach((s) => {
      let characters = s.split("");
      // console.log(characters);
      if (characters.length > 0) {
        res = res.concat(
          characters[0].toUpperCase() + characters.slice(1).join("") + " "
        );
      } else {
        res = res.concat(characters[0].toUpperCase()) + " ";
      }
    });

    return res;
  }
}
export default useCapitalize;

(function () {
  // let req = "hello Vinit,YOu are a?";
  // let res = useCapitalize(req);
  // console.log("op", res);
})();

import manager from "./manager";

const test = async (req, res, next) => {
  // console.log(req)
  // console.log(res)
  manager.insert({
    msg: "test!!!"
  });
  res.send("进来啦！");
  // next()
};

export default {
  test
};

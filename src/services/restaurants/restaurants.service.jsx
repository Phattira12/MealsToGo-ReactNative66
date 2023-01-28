import { mocks, mockImages } from "./mock"; //มาจากไฟล์ index เป็นการสมมุติข้อมูลขึ้น
import camelize from "camelize";

export const retaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    //Promise ทำงานแบบ await/async(สัญญา)//
    const mock = mocks[location]; //หาตำแหน่งที่ไฟล์ index
    if (!mock) {
      reject("not found"); //ถ้าหาไม่สำเร็จจะแสดง not found
    }
    resolve(mock); //สำเร็จและส่งตำแหน่งออกมา
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};

// const restaurantsTransform = (result) => {
//   const newResult = camelize(result);
//   return newResult;
// };

retaurantsRequest()
  .then(restaurantsTransform)
  .then((transformedResponse) => {
    console.log(transformedResponse);
  })
  .catch((err) => {
    console.log("error");
  });

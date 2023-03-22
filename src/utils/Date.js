export const getDate = (dateCheapestPrice) => {
    let date = dateCheapestPrice;
    let d = new Date(date * 1000);
    let month = d.toLocaleString("default", { month: "long" });
    let day = d.getDate();
    let year = d.getFullYear();
    let formatedDate = `${month} ${day}, ${year}`;
    return formatedDate.toString()
}
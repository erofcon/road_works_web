async function convertURLtoFile(url) {
    const response = await fetch(url);
    const data = await response.blob();
    const filename = url.split("/").pop();
    const metadata = {type: data.type};
    return new File([data], filename, metadata);
}

export default convertURLtoFile;

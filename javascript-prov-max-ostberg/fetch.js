class Fetch{
    static getData(){
        let fetchData = fetch('./data.json').then((res) => res.json())
        return fetchData;
    }
}

export default Fetch;
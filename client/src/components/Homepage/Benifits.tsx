import Container from "./Container";

const Benifits = () => {
    return (
        <Container className="flex flex-col items-center text-center ">
            <h1 className="text-gray-500 text-lg">EcoSync Benifits</h1>
            <h3 className=" mt-3 text-3xl text-black font-bold lg:text-4xl max-w-2xl">Why should you use this EcoSync Software</h3>
            <p className="font-bold max-w-2xl py-4 text-gray-500 text-lg lg:text-xl">
                Our dashboard empowers Dhaka South City Corporation to allocate resources 
                more effectively, optimizing manpower and equipment utilization for waste
                management tasks, thus fostering operational efficiency, reducing 
                operational costs, and ultimately leading to a cleaner, more sustainable 
                urban environment.
            </p>
        </Container>
    );
}

export default Benifits;

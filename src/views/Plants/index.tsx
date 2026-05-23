import Plants from "./Plants";
import PlantsProvider from "./PlantsContext";

const Index = () => {
	return (
		<PlantsProvider>
			<Plants />
		</PlantsProvider>
	);
};

export default Index;

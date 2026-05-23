import axios from "axios";
import React, { useEffect, useState } from "react";

interface IContext {
	isLoading: boolean;
	plants: IPlant[];
}

interface IPlant {
	plantId: number;
	name: string;
	latinName: string;
	years: number;
}

export const plantsContext = React.createContext({} as IContext);

const { Provider } = plantsContext;

const PlantsProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [isLoading, setLoading] = useState(true);
	const [plants, setPlants] = useState<IPlant[]>([]);

	useEffect(() => {
		setTimeout(getPlants, 1000);
	}, []);

	const getPlants = async () => {
		try {
			setLoading(true);
			const res = await axios.get("./json/plants.json");
			setPlants(res.data.items);
		} catch (err) {
		} finally {
			setLoading(false);
		}
	};

	return (
		<Provider
			value={{
				isLoading,
				plants,
			}}
		>
			{children}
		</Provider>
	);
};

export default PlantsProvider;

import axios from "axios";
import React, { useEffect, useState } from "react";

interface IContext {
    isLoading: boolean
    plants: IPlant[]
}

interface IPlant {
    plantId: number
    name: string
    latinName: string
    years: number
}

export let plantsContext = React.createContext({} as IContext);

let { Provider } = plantsContext;

let PlantsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    let [isLoading, setLoading] = useState(true);
    let [plants, setPlants] = useState<IPlant[]>([]);

    useEffect(() => {
        setTimeout(getPlants, 1000);
    }, [])


    let getPlants = async () => {
        try {
            setLoading(true);
            let res = await axios.get('./json/plants.json');
            setPlants(res.data.items);

        } catch (err) {

        } finally {
            setLoading(false);
        }
    }


    return (
        <Provider
            value={{
                isLoading,
                plants
            }}
        >
            {children}
        </Provider>
    )
}

export default PlantsProvider;
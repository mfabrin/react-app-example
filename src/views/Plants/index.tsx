import PlantsProvider from './PlantsContext';
import Plants from './Plants';

let Index = () => {
    return (
        <PlantsProvider>
            <Plants />
        </PlantsProvider>
    )
}

export default Index;
import PlantsProvider from './PlantsContext';
import Plants from './Plants';

const Index = () => {
    return (
        <PlantsProvider>
            <Plants />
        </PlantsProvider>
    )
}

export default Index;
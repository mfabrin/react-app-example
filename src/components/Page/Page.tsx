import { CircularProgress, Container } from "@mui/material";

interface IProps {
	isLoading: boolean;
	children: React.ReactNode;
}

const Page = ({ isLoading, children }: IProps) => {
	return (
		<Container>
			<div style={{ marginTop: 16 }}>
				{isLoading && <CircularProgress />}
				{isLoading === false && children}
			</div>
		</Container>
	);
};

export default Page;

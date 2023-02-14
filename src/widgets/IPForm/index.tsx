import React from "react";
import Banner from "../../components/Banner";
// Adding only specific components that are needed in code instead of importing whole library
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/esm/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { validIPAddress } from '../../common/helpers';

export type IpFormProps = {
	loading: boolean;
	sunrise: string;
	sunset: string;
	timezone: string;
	currentIp: string;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => unknown
	handleIpChange: (ip: string) => unknown
}

const IpForm = ({ loading, sunrise, sunset, timezone, currentIp, handleSubmit, handleIpChange, ...props }: IpFormProps) => {

	const isValidIPAddress: boolean = currentIp !== "" && !validIPAddress(currentIp);

	return (
		<Container style={{ marginTop: "10em", maxWidth: "50em", height: "20rem" }}>
			<Banner sunrise={sunrise} sunset={sunset} loading={loading} />

			<Form onSubmit={handleSubmit}>
				<Row>
					<Form.Group className="mb-3" controlId="Ipfield">
						<Form.Control
							isInvalid={isValidIPAddress}
							type="text"
							placeholder="Your current IP address will be considered if not entered"
							value={currentIp}
							onChange={(event) => handleIpChange(event.target.value)}
							disabled={loading}
						/>
						<Form.Control.Feedback type="invalid">
							IP address is not valid. Please add valid IPV 4/6 IP address
						</Form.Control.Feedback>

						<Form.Text className="text-muted">
							All times are subject to timezone: <strong>{timezone}</strong>
						</Form.Text>
					</Form.Group>
				</Row>
				<div className="text-center">
					<Button disabled={loading || isValidIPAddress} type='submit'>Fetch Day Times</Button>
				</div>
			</Form>
		</Container>
	);
};

export default IpForm;

import type {NextPage} from 'next'
import Form from "../components/shared/form/Form";
import Field from "../components/shared/form/Field";
import {Button, Container, Input} from "reactstrap";
import AddressInput from "../components/shared/inputs/AddressInput";

const Home: NextPage = () => {
  return (
    <Container className="p-3">
      <Form
        defaultValues={{
          firstName: '',
          lastName: '',
          email: '',
          address: '',
        }}
        onSubmit={(values) => console.log(values)}
      >
        <Field
          as={Input}
          inputProps={{
            type: 'text',
            placeholder: 'First Name',
          }}
          name="firstName"
          label="First Name"
        />
        <Field
          as={Input}
          inputProps={{
            type: 'text',
            placeholder: 'Last Name',
          }}
          name="lastName"
          label="Last Name"
        />
        <Field
          as={Input}
          inputProps={{
            type: 'email',
            placeholder: 'Email',
          }}
          name="email"
          label="Email"
        />
        <Field
          as={AddressInput}
          inputProps={{
            city: 'Eisenstadt',
            placeholder: 'Street',
          }}
          name="address"
          label="Street"
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Home

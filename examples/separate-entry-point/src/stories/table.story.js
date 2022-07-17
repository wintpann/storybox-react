import Table from 'react-bootstrap/Table';
import { DefaultStoryWrapper } from '../storybox/default-story-wrapper';
import { useCheckboxControl, useRadioControl } from "storybox-react";
import { variants } from "./common";

const shownRowsDefaults = ['first', 'second', 'third'];

export const TableStory = () => {
    const [shownRows] = useCheckboxControl({
        name: 'shownRows',
        options: shownRowsDefaults,
        defaultValue: shownRowsDefaults,
    });

    const [variant] = useRadioControl({
        name: 'variant',
        options: variants,
        defaultValue: 'primary',
    });

    const row = (name, content) => (shownRows.includes(name) ? content : null);

    return (
        <DefaultStoryWrapper>
            <Table variant={variant} striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {row(
                        'first',
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>,
                    )}
                    {row(
                        'second',
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>,
                    )}
                    {row(
                        'third',
                        <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>,
                    )}
                </tbody>
            </Table>
        </DefaultStoryWrapper>
    );
};

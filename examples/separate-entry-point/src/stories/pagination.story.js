import Pagination from 'react-bootstrap/Pagination';
import { DefaultStoryWrapper } from '../storybox/default-story-wrapper';
import { useNumberControl } from 'storybox-react';

export const PaginationStory = () => {
    const [itemsCount] = useNumberControl({
        defaultValue: 10,
        name: 'itemsCount',
        max: 15,
        min: 5,
        integerOnly: true,
    });
    const [activeItem] = useNumberControl({
        defaultValue: 8,
        name: 'activeItem',
        max: itemsCount,
        min: 1,
        integerOnly: true,
    });

    return (
        <DefaultStoryWrapper>
            <Pagination size="lg">
                <>
                    {new Array(itemsCount).fill(null).map((_, index) => {
                        const order = index + 1;
                        return (
                            <Pagination.Item key={order} active={order === activeItem}>
                                {order}
                            </Pagination.Item>
                        );
                    })}
                </>
            </Pagination>
        </DefaultStoryWrapper>
    );
};

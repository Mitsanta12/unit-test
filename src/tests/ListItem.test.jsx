import { render } from "@testing-library/react";

import { ListItem } from "../ListItem";

const mockOnCheck = jest.fn();

describe('ListItem', () => {
    it('display value correctly', () => {
        const { getByText } = render(
            <ListItem
                id='list-item-test'
                checkable={true}
                onCheck={mockOnCheck}
                item='Lorem ipsum dolor sit amet consectetur'
            />
        );

        const value = getByText('Lorem ipsum dolor sit amet consectetur');
        expect(value).toBeInTheDocument();
    });
    
    it('checkbox is shown', () => {
        const { getByTestId } = render(
            <ListItem
                id='list-item-1'
                checkable={true}
                onCheck={mockOnCheck}
                item='Lorem ipsum dolor sit amet consectetur'
            />
        );

        const value = getByTestId('test-list-item-1');
        expect(value).toBeInTheDocument();
    });

    it('checkbox is hidden', () => {
        const { getByTestId, debug } = render(
            <ListItem
                id='list-item-1'
                checkable={false}
                onCheck={mockOnCheck}
                item='Lorem ipsum dolor sit amet consectetur'
            />
        );
        const node = getByTestId('test-list-item-1-container');
        expect(node.children).toHaveLength(1);
    });
    
    //TODO: implement this
    it("callback is called", () => {
        const onCheck = jest.fn();
        const item = "Test item";
        const id = "test-id";
        const checkable = true;
        render(
          <ListItem onCheck={onCheck} item={item} id={id} checkable={checkable} />
        );
        const checkbox = screen.getByTestId(`test-${id}`);
        fireEvent.click(checkbox);
        expect(onCheck).toHaveBeenCalledTimes(1);
      });

    //TODO: implement this
    it('callback is not called when not checkable', () => {
        const checked =jest.fn();
        const testItem = "Test item";
        const testId = "test-id";
        const checkable = false;
        render(
            <ListItem onCheck={checked} item={testItem} id={testId} checkable={checkable} />
          );
      
          fireEvent.click(screen.getByTestId(`test-${id}-container`), {
            target: { checked: true },
          });
          expect(checked).not.toHaveBeenCalled();
        });

   

    //TODO: implement this
    it('matches saved snapshot', () => {
        const saved = render(
            <ListItem
                id='list-item-test'
                checkable={true}
                onCheck={mockOnCheck}
                item='Lorem ipsum dolor sit amet consectetur'
            />
        );
        expect(saved).toMatchSnapshot();
    });
});
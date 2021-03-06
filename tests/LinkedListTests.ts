import { expect } from "chai";
import "mocha";
import { LinkedList } from "./../src/LinkedList";

describe("Linked List Tests", () => {
  it("sort method should sort linked list", () => {
    const linkedList = new LinkedList();
    linkedList.add(500);
    linkedList.add(-10);
    linkedList.add(-3);
    linkedList.add(4);
    linkedList.sort();
    expect(linkedList.at(0).data).to.equal(-10);
  });

  it("add method should add node to linked list", () => {
    const linkedList = new LinkedList();
    linkedList.add(500);
    expect(linkedList.at(0).data).to.equal(500);
    expect(linkedList.length).to.equal(1);
  });

  it("length getter should return correct length", () => {
    const linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.add(5);
    expect(linkedList.length).to.equal(5);
  });

  it("length getter should return zero with empty linked list", () => {
    const linkedList = new LinkedList();
    expect(linkedList.length).to.equal(0);
  });

  it("at method returns correct data", () => {
    const linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.add(5);
    expect(linkedList.at(4).data).to.equal(5);
  });

  it("at method empty index does not exist throws error", () => {
    const linkedList = new LinkedList();
    expect(() => linkedList.at(0)).to.throw(Error, "Index out of bounds");
  });

  it("compare method empty linked list throws error", () => {
    const linkedList = new LinkedList();
    expect(() => linkedList.compare(0, 1)).to.throw(Error, "List is empty");
  });

  it("swap method swaps left index and right index", () => {
    const linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.swap(0, 1);
    expect(linkedList.at(0).data).to.equal(2);
    expect(linkedList.at(1).data).to.equal(1);
  });
});

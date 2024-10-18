import UserAccount from "@/components/user-account";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"

describe("User account", () => {
    it("should render edit button if user is an admin", () => {
        const user = {id: 1, name: "halic", isAdmin: true};
        render(<UserAccount user={user}/>)

        const editButton = screen.queryByRole("button", {name: /edit/i})

        expect(editButton).toBeInTheDocument();
        
    })

    it("should not render edit button if user is not an admin", () => {
        const user = {id: 1, name: "halic", isAdmin: false};
        render(<UserAccount user={user}/>)

        const editButton = screen.queryByRole("button", {name: /edit/i})

        expect(editButton).not.toBeInTheDocument();
    })

    it("should render username", () => {
        const user = {id: 1, name: "halic", isAdmin: true};
        render(<UserAccount user={user}/>)

        const name = screen.getByText(user?.name)

        expect(name).toBeInTheDocument();
    })
})
import React from "react";
import Breadcrumb, { BreadcrumbItem } from "../Components/Breadcrumb";

export default function BreadcrumbComponent() {
    return (
        <Breadcrumb>
            <BreadcrumbItem title="React-Raw" link="#" />
            <BreadcrumbItem title="Remix" link="#" />
            <BreadcrumbItem title="React" link="#" />
            <BreadcrumbItem title="Breadcrumb" link="#" />
        </Breadcrumb>
    );
}

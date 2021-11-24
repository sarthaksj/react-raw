import React from "react";
import Tabs, { TabItem } from "../Components/Tabs";

export default function TabsComponent() {
    return (
        <Tabs>
            <TabItem title="Pictures" />
            <TabItem title="Movies" />
            <TabItem title="Network" />
            <TabItem title="Videos" />
        </Tabs>
    );
}

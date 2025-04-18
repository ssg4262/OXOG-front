import {DefaultLayout} from "@/layout/DefaultLayout.tsx";
import {MainSideBar} from "@/components/sidebar/main/MainSideBar.tsx";
import {MainServerSideBar} from "@/components/sidebar/main/MainServerSideBar.tsx";

export const MainHome = () => {
    return (
            <DefaultLayout
             sidebar={<MainSideBar/>}
             childSide={<MainServerSideBar/>}
            />
    );
};

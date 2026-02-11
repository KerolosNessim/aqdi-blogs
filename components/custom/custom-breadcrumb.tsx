import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
type item = {
  label: string;
  href?: string;
};

interface props {
  items: item[];
}

const CustomBreadCrumbs = ({ items }: props) => {
  return (
    <Breadcrumb className="py-12 container">
      <BreadcrumbList className="text-base font-bold">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <a href="https://aqdi.sa/" className="text-text">
              الرئيسية
            </a>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-text" />
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-text last:hidden" />
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CustomBreadCrumbs;

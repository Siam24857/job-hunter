"use client";

import { Avatar, Button, Chip, Table } from "@heroui/react";
import { useState } from "react";
import { updatecompanystatus } from "../lib/Dataaccses/api";

const statusColorMap = {
  Pending: "warning",
  Approved: "success",
  Rejected: "danger",
};

export default function CompanyApprovalTable({ companies }) {
  const [data, setData] = useState(companies || []);

  const handleupdate = async(id, status)=>{
      const changedata = await updatecompanystatus(id, status)
  }

  const updateStatus = (id, status) => {
    setData((prev) =>
      prev.map((company) =>
        company._id === id
          ? { ...company, status }
          : company
      )
    );
  };

  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content
          aria-label="Company Approval Table"
          className="min-w-[1000px]"
        >
          <Table.Header>
            <Table.Column>COMPANY</Table.Column>
            <Table.Column>INDUSTRY</Table.Column>
            <Table.Column>LOCATION</Table.Column>
            <Table.Column>EMPLOYEES</Table.Column>
            <Table.Column>STATUS</Table.Column>
            <Table.Column className="text-end">
              ACTIONS
            </Table.Column>
          </Table.Header>

          <Table.Body>
            {data.map((company) => (
              <Table.Row
                key={company._id}
                id={company._id}
              >
                <Table.Cell>
                  <div className="flex items-center gap-3">
                    <Avatar size="sm">
                      <Avatar.Image src={company.logo} />
                      <Avatar.Fallback>
                        {company.name?.charAt(0)}
                      </Avatar.Fallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <span className="font-medium">
                        {company.name}
                      </span>

                      <span className="text-xs text-muted">
                        {company.websiteUrl}
                      </span>
                    </div>
                  </div>
                </Table.Cell>

                <Table.Cell>
                  {company.industry}
                </Table.Cell>

                <Table.Cell>
                  {company.location}
                </Table.Cell>

                <Table.Cell>
                  {company.employeeCount}
                </Table.Cell>

                <Table.Cell>
                  <Chip
                    color={
                      statusColorMap[
                        company.status
                      ]
                    }
                    size="sm"
                    variant="soft"
                  >
                    {company.status}
                  </Chip>
                </Table.Cell>

                <Table.Cell>
                  <div className="flex justify-end gap-2">
                    <Button
                    onClick={()=> handleupdate(company._id, "Approved")}
                      size="sm"
                      color="success"
                      onPress={() =>
                        updateStatus(
                          company._id,
                          "Approved"
                        )
                      }
                    >
                      Approve
                    </Button>

                    <Button
                      size="sm"
                      color="danger"
                      onPress={() =>
                        updateStatus(
                          company._id,
                          "Rejected"
                        )
                      }
                    >
                      Reject
                    </Button>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}
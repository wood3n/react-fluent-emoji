import React, { useState, lazy, Suspense } from "react";
import { Typography, Card, Modal, Row, Col, Tabs } from "antd";
import PageLoading from "./components/page-loading";
import { getFileInfo } from "../../utils";
import styles from "./index.module.less";

interface ComponentType {
  default: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const icons = import.meta.glob<ComponentType>("../icon-component/**/*.tsx");
const colors = Object.keys(icons).filter(path => path.split("/").includes("color"));
const flats = Object.keys(icons).filter(path => path.split("/").includes("flat"));
const highContrasts = Object.keys(icons).filter(path => path.split("/").includes("high contrast"));

const Doc: React.FC = () => {
  const handleClick = () => {
    Modal.info({
      icon: null,
      content: (
        <div>
          <Tabs activeKey="color">
            <Tabs.TabPane tab="color" key="color">color</Tabs.TabPane>
            <Tabs.TabPane tab="flat" key="flat">flat</Tabs.TabPane>
            <Tabs.TabPane tab="high contrast" key="contrast">high contrast</Tabs.TabPane>
          </Tabs>
        </div>
      )
    });
  };

  return (
    <div className={styles.container}>
      <Suspense fallback={<PageLoading />}>
        <Row className={styles.pageTitle}>
          <Typography.Title level={1}>react fluent emoji</Typography.Title>
        </Row>
        <Row gutter={16}>
          {colors.map(path => {
            const Component = lazy(icons[path]);
            const { fileName, iconName } = getFileInfo(path);

            return (
              <Col span={4} key={path}>
                <Card
                  hoverable
                  onClick={handleClick}
                  bodyStyle={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                  style={{
                    height: "100%"
                  }}
                >
                  <Component width={64} height={64} />
                  <Typography.Text type="secondary" style={{ marginTop: 24, textAlign: "center" }}>{iconName}</Typography.Text>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Suspense>
    </div>
  );
};

export default Doc;
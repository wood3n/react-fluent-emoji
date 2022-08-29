import React, { useState, lazy, Suspense } from "react";
import { Typography, Card, Modal, Row, Col, Tabs, Pagination } from "antd";
import { chunk } from "lodash-es";
import PageLoading from "./components/page-loading";
import { getFileInfo } from "../../utils";
import styles from "./index.module.less";

interface ComponentType {
  default: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

console.time("resolve");
const icons = import.meta.glob<ComponentType>("../icon-component/**/*.tsx");
console.timeEnd("resolve");
const colors = Object.keys(icons).filter(path => path.split("/").includes("color"));
const flats = Object.keys(icons).filter(path => path.split("/").includes("flat"));
const highContrasts = Object.keys(icons).filter(path => path.split("/").includes("high contrast"));
const colorsChunks = chunk(colors, 80);

/**
 * website
 * TODO:performance bad, try to make it faster
 */
const Doc: React.FC = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const handleClick = () => {
    Modal.info({
      title: null,
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
        <Row gutter={[16, 16]} wrap>
          {colorsChunks[pageIndex-1].map(path => {
            const Component = lazy(icons[path]);
            const { fileName, iconName } = getFileInfo(path);

            return (
              <Col md={8} lg={6} xl={4} xxl={3} key={path}>
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
      <div className={styles.pagination}>
        <Pagination
          current={pageIndex}
          pageSize={80}
          total={colors.length}
          showSizeChanger={false}
          onChange={pageIndex => setPageIndex(pageIndex)}
        />
      </div>
    </div>
  );
};

export default Doc;
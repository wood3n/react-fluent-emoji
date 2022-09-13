import React, { useEffect, useState, useRef } from "react";
import { Typography, Card, Modal, Tabs, Pagination, Spin, Row, Col } from "antd";
import iconsStats from "./icons.json";
import Icon from "./components/Icon";
import styles from "./index.module.less";

/**
 * website
 */
const Doc: React.FC = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const [loading, setLoading] = useState(false);
  const chunkCache = useRef<string[]>([]);

  const fetchChunk = (chunk: string) => {
    setLoading(true);
    fetch(`./${chunk}`)
      .then(res => res.text())
      .then(svg => {
        const div = document.createElement("div");
        // https://stackoverflow.com/a/24820654/11218434
        div.style.position = "relative";
        div.innerHTML = svg;
        document.body.prepend(div);
        chunkCache.current.push(chunk);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const nextChunk = iconsStats[pageIndex - 1].chunk;
    if(chunkCache.current.includes(nextChunk)) return;

    fetchChunk(nextChunk);
  }, [pageIndex]);

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
      <div className={styles.pageTitle}>
        <Typography.Title level={1}>react fluent emoji</Typography.Title>
      </div>
      <div className={styles.pagination}>
        <Pagination
          current={pageIndex}
          pageSize={1}
          total={iconsStats.length}
          showSizeChanger={false}
          onChange={pageIndex => setPageIndex(pageIndex)}
        />
      </div>
      <Row gutter={[24, 24]} className={styles.iconList}>
        {loading ? <div className={styles.spinContainer}><Spin /></div> : iconsStats[pageIndex-1].icons.map(id => {
          return (
            <Col key={id} span={4}>
              <Card
                hoverable
                onClick={handleClick}
                bodyStyle={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                className={styles.iconCard}
              >
                <Icon id={id} />
                <div className={styles.iconDescription}>
                  {id}
                </div>
              </Card>
            </Col>
          ); })}
      </Row>
    </div>
  );
};

export default Doc;
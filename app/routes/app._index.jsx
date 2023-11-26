
import { json } from "@remix-run/node";
import {
  Page,
  Layout,
  Text,
  VerticalStack,
  Card,
} from "@shopify/polaris";

import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  const { session } = await authenticate.admin(request);

  return json({ shop: session.shop.replace(".myshopify.com", "") });
};


export default function Index() {
  return (
    <Page>
      <ui-title-bar title="Hide a payment method demo" />
      <VerticalStack gap="5">
        <Layout>
          <Layout.Section>
            <Card>
              <VerticalStack gap="5">
                <VerticalStack gap="2">
                  <Text as="h2" variant="headingMd">
                    👋 Welcome!
                  </Text>
                  <Text variant="bodyMd" as="p">
                    Hide a payment method demo app
                  </Text>
                </VerticalStack>

              </VerticalStack>
            </Card>
          </Layout.Section>

        </Layout>
      </VerticalStack>
    </Page>
  );
}

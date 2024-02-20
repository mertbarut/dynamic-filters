import { WorkOrder as WorkOrderModel } from '@/models';
import { Text, Card, VStack, Heading, Box, Divider } from '@gluestack-ui/themed';
import dayjs from 'dayjs';
import { Component } from 'react';

type WorkOrderProps = WorkOrderModel;

export class WorkOrder extends Component<WorkOrderProps> {
  start = dayjs(this.props.startDate).format('DD/MM/YY HH:mm');
  end = dayjs(this.props.endDate).format('DD/MM/YY HH:mm');

  render() {
    return (
      <Card
        key={this.props.id}
        borderWidth="$4"
        borderColor={this.props.color}
        p="$5"
        borderRadius="$lg"
        minWidth="$1/2"
        m="$3"
      >
        <Box
          my="$5"
          sx={{
            flexDirection: 'column',
            '@sm': {
              my: '$2',
              flexDirection: 'row',
            },
          }}
        >
          <VStack
            alignItems="center"
            sx={{
              pb: '$2',
              '@sm': {
                flex: 1,
                pb: '$0',
                borderRightWidth: 1,
                borderColor: '$backgroundLight300',
                _dark: {
                  borderRightColor: '$backgroundDark800',
                },
              },
            }}
          >
            <Text size="xs">Time Slot</Text>
            <Heading size="xs" fontFamily="$heading">
              {this.start} – {this.end}
            </Heading>
          </VStack>
          <Divider
            orientation="horizontal"
            width="40%"
            alignSelf="center"
            sx={{
              bg: '$backgroundLight300',
              display: 'flex',
              _dark: {
                bg: '$backgroundDark800',
              },
              '@sm': {
                display: 'none',
              },
            }}
          />
          <VStack
            alignItems="center"
            sx={{
              py: '$2',
              '@sm': {
                flex: 1,
                py: '$0',
                borderRightWidth: 1,
                borderColor: '$backgroundLight300',
                _dark: {
                  borderRightColor: '$backgroundDark800',
                },
              },
            }}
          >
            <Text size="xs">Type</Text>
            <Heading size="xs" fontFamily="$heading">
              {this.props.type}
            </Heading>
          </VStack>
          <Divider
            orientation="horizontal"
            width="40%"
            alignSelf="center"
            sx={{
              bg: '$backgroundLight300',
              display: 'flex',
              _dark: {
                bg: '$backgroundDark800',
              },
              '@sm': {
                display: 'none',
              },
            }}
          />
          <VStack
            alignItems="center"
            sx={{
              pt: '$2',
              '@sm': {
                flex: 1,
                pt: '$0',
              },
            }}
          >
            <Text size="xs">Status</Text>
            <Heading size="xs" fontFamily="$heading">
              {this.props.status}
            </Heading>
          </VStack>
        </Box>
        <Divider my="$2" />
        <VStack mb="$6">
          <Text size="xs">Name</Text>
          <Heading size="md" fontFamily="$heading" mb="$4">
            {this.props.name}
          </Heading>
          <Text size="sm" fontFamily="$heading" numberOfLines={3}>
            {this.props.description}
          </Text>
        </VStack>
      </Card>
    );
  }
}

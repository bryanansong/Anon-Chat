import { View, Text, StyleSheet } from 'react-native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime);

const Message = ({message}) => {

    const isMyMessage = () => {
        return message.user.id === 'u1';
    };

    return (
        <View style={[styles.container, {
            backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
            alignSelf: isMyMessage() ? 'flex-end' : 'flex-start',
        }]}>
            <Text>{message.text}</Text>
            <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#D9D9D9',
        // alignSelf: 'flex-start',

        margin: 5,
        padding: 10,
        borderRadius: 20,
        maxWidth: '80%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    time: {
        color: 'grey',
        alignSelf: 'flex-end'
    }
})

export default Message;